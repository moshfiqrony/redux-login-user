export const givenUser = (email, password) => {
    return({
        type: 'user_submit',
        payload: {
            email: email,
            password: password
        }
    })
}
