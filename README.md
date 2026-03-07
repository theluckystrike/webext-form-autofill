[![CI](https://github.com/theluckystrike/webext-form-autofill/actions/workflows/ci.yml/badge.svg)](https://github.com/theluckystrike/webext-form-autofill/actions)
[![npm](https://img.shields.io/npm/v/@theluckystrike/webext-form-autofill)](https://www.npmjs.com/package/@theluckystrike/webext-form-autofill)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)

# WEBEXT-FORM-AUTOFILL

Form utilities for Chrome extensions. Detect forms, fill fields, extract data, and smart auto-fill by heuristics.

## Installation

```bash
npm install webext-form-autofill
```

## Usage

```typescript
import { FormDetector, FormFiller } from 'webext-form-autofill';

// Detect login forms on the page
const loginForms = FormDetector.getLoginForms();

// Auto-fill common fields
FormFiller.autoFill({ name: 'John', email: 'john@example.com' });
```

## API Reference

### FormDetector

Find and analyze forms on a page.

```typescript
// Get all forms on page
FormDetector.getForms(): HTMLFormElement[]

// Get all input fields (including outside forms)
FormDetector.getInputs(): HTMLInputElement[]

// Detect login forms
FormDetector.getLoginForms(): HTMLFormElement[]

// Detect search forms
FormDetector.getSearchForms(): HTMLFormElement[]

// Get field information
FormDetector.getFieldInfo(input: HTMLInputElement): { name: string; type: string; label: string; required: boolean }
```

### FormFiller

Fill form fields intelligently.

```typescript
// Fill a form with data (matches by name, id, or label)
FormFiller.fill(form: HTMLFormElement, data: FormData): void

// Extract form data
FormFiller.extract(form: HTMLFormElement): FormData

// Submit a form
FormFiller.submit(form: HTMLFormElement): void

// Clear all form fields
FormFiller.clear(form: HTMLFormElement): void

// Fill by field type heuristics
FormFiller.autoFill(data: { name?: string; email?: string; phone?: string; address?: string }): void
```

### FormData Interface

```typescript
interface FormData {
    [key: string]: string | boolean | number;
}
```

## Requirements

- TypeScript 5.3+
- Chrome Extensions API (manifest V3)

## Building

```bash
npm run build
```

## Testing

```bash
npm test
```

## About

This library is maintained by theluckystrike. For questions and support, please open an issue on GitHub.

Learn more about Zovo at https://zovo.one

---
Built by [theluckystrike](https://github.com/theluckystrike) — [zovo.one](https://zovo.one)
