/** Domain-level failures. Infrastructure and UI translate these, never leak them raw. */
export class DomainError extends Error {
  constructor(message, { code = "DOMAIN_ERROR", details } = {}) {
    super(message);
    this.name = new.target.name;
    this.code = code;
    this.details = details;
  }
}

export class InvariantViolationError extends DomainError {
  constructor(message, details) {
    super(message, { code: "INVARIANT_VIOLATION", details });
  }
}

export class ContentNotFoundError extends DomainError {
  constructor(aggregate, slug) {
    super(`${aggregate} not found for slug "${slug}"`, {
      code: "CONTENT_NOT_FOUND",
      details: { aggregate, slug },
    });
  }
}

export class ValidationError extends DomainError {
  constructor(issues) {
    super("One or more fields are invalid", { code: "VALIDATION_ERROR", details: { issues } });
    this.issues = issues;
  }
}
