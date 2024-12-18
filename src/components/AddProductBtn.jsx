import * as Dialog from "@radix-ui/react-dialog";
import CreateProduct from "./CreateProduct";

export default function AddProductBtn({ shopId }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="py-1 px-3 mt-6 sm:mt-0 sm:ml-10 text-lg rounded-xl bg-prismarine  text-white shadow-[0_2px_10px] shadow-black hover:bg-benihired hover:text-white focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none text-center">
          Add product
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow" />
        <Dialog.Content className=" fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
          <Dialog.Title className=" m-0 text-[17px] font-medium text-mauve12">
            Add Product
          </Dialog.Title>
          <Dialog.Description className=" mb-5 mt-2.5 text-[15px] leading-normal text-mauve11">
            Give the details for your product here. Click save when you're done.
          </Dialog.Description>
          <CreateProduct shopId={shopId} />
          <Dialog.Close asChild>
            <button
              className="   absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full text-violet11 hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none"
              aria-label="Close"
            >
              x
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
