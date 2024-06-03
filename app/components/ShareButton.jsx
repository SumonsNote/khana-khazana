import { motion } from "framer-motion";
import Image from "next/image";
import facebook from "../../public/facebook.svg";
import linkedin from "../../public/linkedin.svg";
import telegram from "../../public/telegram.svg";
import twitter from "../../public/twitter.svg";
import whatsapp from "../../public/whatsapp.svg";

export default function ShareButtons({ recipe }) {
  const url = window.location.href;
  const title = recipe?.title;
  const des = recipe.description;

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 10,
      }}
      className="mt-10 absolute"
    >
      <a
        className="facebook"
        href={`https://www.facebook.com/share.php?u=${url}`}
        target="_blank"
      >
        <Image src={facebook} alt="facebook" width={30} height={20} />
      </a>

      <a
        className="twitter"
        href={`http://twitter.com/share?&url=${url}&text=${title}`}
        target="_blank"
      >
        <Image src={twitter} alt="twitter" width={30} height={20} />
      </a>

      <a
        className="linkedin"
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
        target="_blank"
      >
        <Image src={linkedin} alt="linkedin" width={30} height={20} />
      </a>

      <a
        className="whatsapp"
        href={`https://api.whatsapp.com/send?${url}`}
        target="_blank"
      >
        <Image src={whatsapp} alt="whatsapp" width={30} height={20} />
      </a>

      <a
        className="telegram"
        href={`https://telegram.me/share/url?url=${url}&text=${title}`}
        target="_blank"
      >
        <Image src={telegram} alt="telegram" width={30} height={20} />
      </a>
    </motion.div>
  );
}
