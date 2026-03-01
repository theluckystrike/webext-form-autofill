/**
 * Form Detector — Find and analyze forms on a page
 */
export class FormDetector {
    /** Get all forms on page */
    static getForms(): HTMLFormElement[] { return Array.from(document.querySelectorAll('form')); }

    /** Get all input fields (including outside forms) */
    static getInputs(): HTMLInputElement[] { return Array.from(document.querySelectorAll('input, select, textarea')) as HTMLInputElement[]; }

    /** Detect login forms */
    static getLoginForms(): HTMLFormElement[] {
        return this.getForms().filter((form) => {
            const inputs = form.querySelectorAll('input');
            const hasPassword = Array.from(inputs).some((i) => i.type === 'password');
            const hasEmail = Array.from(inputs).some((i) => i.type === 'email' || i.name.includes('email') || i.name.includes('user'));
            return hasPassword && (hasEmail || inputs.length <= 4);
        });
    }

    /** Detect search forms */
    static getSearchForms(): HTMLFormElement[] {
        return this.getForms().filter((form) => {
            const inputs = form.querySelectorAll('input');
            return Array.from(inputs).some((i) => i.type === 'search' || i.name.includes('search') || i.name.includes('query') || i.name === 'q');
        });
    }

    /** Get field info */
    static getFieldInfo(input: HTMLInputElement): { name: string; type: string; label: string; required: boolean } {
        const label = input.labels?.[0]?.textContent || input.placeholder || input.name || input.id || '';
        return { name: input.name || input.id, type: input.type, label: label.trim(), required: input.required };
    }
}
