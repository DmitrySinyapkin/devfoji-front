export interface Props {
    type?: 'text' | 'email' | 'tel' | 'search' | 'number'
    label?: string
    placeholder?: string
    error?: string | undefined
    disable?: boolean
    width?: string | number 
}
