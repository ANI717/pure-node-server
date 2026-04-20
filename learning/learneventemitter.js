import EventEmitter from 'events'
const emitter = new EventEmitter()


emitter.on('Success', (message) => {
    console.log('Success:', message)
})

emitter.on('Error', (message) => {
    console.log('Error:', message)
})


emitter.emit('Success', 'The operation is successful.')
emitter.emit('Error', 'There was an error during the operation.')
emitter.emit('Error', 'There was another error during the operation.')
emitter.emit('Success', 'Again the operation is successful.')
