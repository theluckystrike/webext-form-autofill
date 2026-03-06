# Contributing to webext-form-autofill

Thank you for your interest in contributing. This guide covers how to report issues, develop, and submit contributions.

## Reporting Issues

Before reporting a bug or requesting a feature, please check if the issue already exists. When submitting a new issue:

- Use a clear and descriptive title
- Provide steps to reproduce the bug (for bug reports)
- Include your environment details (browser, extension manifest version)
- For feature requests, explain the use case and desired behavior

## Development Workflow

1. Fork the repository
2. Clone your fork: `git clone https://github.com/theluckystrike/webext-form-autofill.git`
3. Install dependencies: `npm install`
4. Create a feature branch: `git checkout -b feature/your-feature-name`
5. Make your changes and test thoroughly
6. Build the project: `npm run build`
7. Run tests: `npm test`
8. Commit with clear messages
9. Push to your fork and submit a pull request

## Code Style

- Use TypeScript for all new code
- Follow the existing code patterns in the repository
- Use meaningful variable and function names
- Keep functions focused and small
- Add JSDoc comments for public APIs
- Run the build to ensure no TypeScript errors

## Testing

Write tests for new functionality when applicable. Run the test suite before submitting:

```bash
npm test
```

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
