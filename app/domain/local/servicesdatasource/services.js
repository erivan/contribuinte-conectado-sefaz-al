import services from './services.json'

export function getServices() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(services.data)
        }, 500)
    })
}
