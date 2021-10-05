export default function ({ store, redirect }) {
    if (!store.getters.isAuthenticated) {
        return redirect({name: 'login'})
    } else if (!store.state.donors.isDonor) {
        return redirect({name: 'profile-create'})
    }
}