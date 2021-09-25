export type SGErrors = {
  errors: {
    params?: string[];
    key?: string;
  };
};

export class SGError extends Error {
  constructor(
    public sgErrors: SGErrors,
    message = "Error response from Storm Glass",
  ) {
    super(message);
  }
}

export class SGParamsNotValidError extends SGError {
  static is(sgErrors: SGErrors) {
    const { params } = sgErrors.errors;

    if (!params) return false;

    return params[0].match("not valid. Should be one of:");
  }

  constructor(sgErrors: SGErrors) {
    super(sgErrors, "The provided params are empty or not valid");
  }
}

export class SGApiKeyError extends SGError {
  static is(sgErrors: SGErrors) {
    return Boolean(sgErrors.errors.key);
  }

  constructor(sgErrors: SGErrors) {
    super(sgErrors, sgErrors.errors.key ?? "API key is invalid");
  }
}

export function hasErrors(data: Record<string, unknown>): data is SGErrors {
  return Boolean(data?.errors);
}
