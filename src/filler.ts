/**
 * Form Filler — Fill form fields intelligently
 */
export interface FormData { [key: string]: string | boolean | number; }

export class FormFiller {
    /** Fill a form with data (matches by name, id, or label) */
    static fill(form: HTMLFormElement, data: FormData): void {
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach((el) => {
            const input = el as HTMLInputElement;
            const key = Object.keys(data).find((k) =>
                input.name === k || input.id === k || input.getAttribute('autocomplete') === k ||
                input.placeholder?.toLowerCase().includes(k.toLowerCase())
            );
            if (!key) return;
            const value = data[key];
            if (input.type === 'checkbox') { input.checked = !!value; }
            else if (input.type === 'radio') { if (input.value === String(value)) input.checked = true; }
            else { input.value = String(value); }
            input.dispatchEvent(new Event('input', { bubbles: true }));
            input.dispatchEvent(new Event('change', { bubbles: true }));
        });
    }

    /** Extract form data */
    static extract(form: HTMLFormElement): FormData {
        const data: FormData = {};
        const formData = new globalThis.FormData(form);
        formData.forEach((value, key) => { data[key] = value as string; });
        return data;
    }

    /** Submit a form */
    static submit(form: HTMLFormElement): void { form.requestSubmit(); }

    /** Clear all form fields */
    static clear(form: HTMLFormElement): void { form.reset(); }

    /** Fill by field type heuristics */
    static autoFill(data: { name?: string; email?: string; phone?: string; address?: string }): void {
        const inputs = document.querySelectorAll('input') as NodeListOf<HTMLInputElement>;
        inputs.forEach((input) => {
            const hint = (input.name + input.id + input.placeholder + (input.getAttribute('autocomplete') || '')).toLowerCase();
            if (data.email && (hint.includes('email') || input.type === 'email')) input.value = data.email;
            else if (data.name && (hint.includes('name') || hint.includes('full'))) input.value = data.name;
            else if (data.phone && (hint.includes('phone') || hint.includes('tel') || input.type === 'tel')) input.value = data.phone;
            else if (data.address && hint.includes('address')) input.value = data.address;
            if (input.value) { input.dispatchEvent(new Event('input', { bubbles: true })); }
        });
    }
}
