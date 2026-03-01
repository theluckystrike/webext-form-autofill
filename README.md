# webext-form-autofill — Form Utilities for Chrome Extensions
> **Built by [Zovo](https://zovo.one)**

Detect forms, fill fields, extract data, and smart auto-fill by heuristics. `npm i webext-form-autofill`

```typescript
import { FormDetector, FormFiller } from 'webext-form-autofill';
const loginForms = FormDetector.getLoginForms();
FormFiller.autoFill({ name: 'John', email: 'john@example.com' });
```
MIT License
