import { useForm, type GenericObject } from "vee-validate";
import type { ObjectSchema } from "yup";

export function useValidate<T extends GenericObject>(
    validationSchema: ObjectSchema<T>,
    initialValues: Partial<T>,
    callback: (values: T) => Promise<void>
) {
    const { defineField, values, errors, validate } = useForm<T>({
        validationSchema,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        initialValues: initialValues as any
    })

    const onValidate = async () => {
        const { valid } = await validate()

        if (valid) {
            await callback(values)
        }
    }

    return {
        errors,
        defineField,
        onValidate
    }
}
