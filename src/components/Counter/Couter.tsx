import useBearStore from "../../hooks/useBearStore";
import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import Header from "../Header/Header";

const Couter = () => {
  const useDogStore = create(
    subscribeWithSelector(() => ({ paw: true, snout: true, fur: true }))
  );

  const dataCouter = useBearStore((state: any) => state.bears);
  const paw = useDogStore.getState().paw;
  // Listening to all changes, fires synchronously on every change
  const unsub1 = useDogStore.subscribe(console.log);
  // Updating state, will trigger listeners
  useDogStore.setState({ paw: false }); // Khi state paw thay doi thi unsub1 lestening va console.log ra
  // Unsubscribe listeners
  unsub1();

  const increasePopulation = useBearStore(
    (state: any) => state.increasePopulation
  );

  console.log(paw);

  return (
    <div>
      <Header />
      <h2 className="mt-20 text-center text-3xl font-bold tracking-tight text-gray-900 mb-5">
        {dataCouter}
      </h2>
      <div style={{margin: '0 550px'}}>
        <button
          onClick={increasePopulation}
          className="group relative flex mb-5 w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Increase
        </button>
      </div>
    </div>
  );
};

export default Couter;
