export function PasswordValidation(password) {
    if ((password !== null) && (password.length > 8) && (password !== password.toLowerCase())) {
        return true
    } else {
        return false
    }
}    