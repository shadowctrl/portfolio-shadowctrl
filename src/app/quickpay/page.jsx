import Link from "next/link";
import "./quickpay.css";
import Image from "next/image";

export const metadata = {
  title: "Quick Pay | shadowctrl",
  description:
    "Pay Hassle free with any mode you prefer!. Wise | Paypal | Bank transfer",
};

const Page = ({}) => {
  return (
    <div className="quickpay-parent">
      <div className="quickpay-head-parent">
        <div className="quickpay-head">
          <span>#</span>
          <h1>Quick Pay</h1>
          <div className="quickpay-dash"></div>
        </div>{" "}
        <p>Pay Hassle free with any mode you prefer!</p>
      </div>
      <div className="quickpay-container">
        <div className="quickpay-item">
          <Image
            src={"/assets/wise-quick-pay-qr-code.png"}
            width={200}
            height={200}
          />

          <Link
            href={"https://wise.com/pay/business/nvijayaraghavan"}
            target="_blank"
          >
            <h3 className="bg-[#9fe870] text-black"> Pay with Wise</h3>{" "}
          </Link>
        </div>
        <div className="quickpay-item">
          <Image
            src={"/assets/paypal-quick-pay-qr-code.png"}
            width={200}
            height={200}
          />

          <Link
            href={"https://www.paypal.com/ncp/payment/FFGC8YLPLQZW6"}
            target="_blank"
          >
            <h3 className="bg-[#003087] text-white">Paypal</h3>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
