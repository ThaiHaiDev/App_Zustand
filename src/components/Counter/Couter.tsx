import useBearStore from "../../hooks/useBearStore"
import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

const Couter = () => {
    const useDogStore = create(
        subscribeWithSelector(() => ({ paw: true, snout: true, fur: true }))
    )

    const dataCouter = useBearStore((state:any) => state.bears);
    const paw = useDogStore.getState().paw
    // Listening to all changes, fires synchronously on every change
    const unsub1 = useDogStore.subscribe(console.log)
    // Updating state, will trigger listeners
    useDogStore.setState({ paw: false }) // Khi state paw thay doi thi unsub1 lestening va console.log ra
    // Unsubscribe listeners
    unsub1()

    const increasePopulation = useBearStore((state:any) => state.increasePopulation);

    console.log(paw)

    return (
        <div>
            <h2>{dataCouter}</h2>
            <button onClick={increasePopulation}>Increase</button>
        </div>
    )
}

export default Couter