import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import React from 'react';

const PaymentComponent = ({ setIsOpen, isOpen, price }) => {
    const close = () => {
        setIsOpen(false);
    }
const lanchRazorPay= ()=>{
    let options ={
key:"rzp_test_C8irN7enEox7uP",
name:"BOOK MY SHOW CLONE",
description:"Movie Purchase or Rental",
image:"https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
amount:price * 100,
currency:"INR",
handler:()=>{
setIsOpen(false)
alert("Payment Successful")
},
theme:{color:"#c4242d"}
    }
let razorPay = window.Razorpay(options);
razorPay.open()
}
    return (
        <Dialog open={isOpen} as="div" className="relative z-50 focus:outline-none" onClose={close}>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4">
                    <DialogPanel
                        transition
                        className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 transform translate-x-[-20%] translate-y-[-20%]"
                    >
                        <DialogTitle as="h3" className="text-base/7 font-medium text-black">
                            Please Make Some Payment
                        </DialogTitle>
                        <p className="mt-2 text-sm/6 text-black/50">
                            Please click on the below button to start payment.
                        </p>
                        <div className="mt-4">
                            <Button
                                className="inline-flex items-center gap-2 rounded-md bg-red-700 py-1.5 px-3 m-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-red-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-red-700"
                                onClick={lanchRazorPay}
                            >
                                Pay ₹{price}
                            </Button>
                            <Button
                                className="inline-flex items-center gap-2 rounded-md bg-red-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-red-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-red-700"
                                onClick={close}
                            >
                                Cancel Payment
                            </Button>

                            
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
};

export default PaymentComponent;
