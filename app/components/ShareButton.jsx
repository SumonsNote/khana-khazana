import Image from "next/image";
import facebook from "../../public/facebook.svg";
import linkedin from "../../public/linkedin.svg";
import telegram from "../../public/telegram.svg";
import twitter from "../../public/twitter.svg";
import whatsapp from "../../public/whatsapp.svg";

export default function ShareButtons({ recipe }) {
  const link = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(recipe?.title);
  const image = encodeURIComponent(recipe.image);

  return (
    <div id="share-buttons" className="flex">
      <a
        className="facebook"
        href={`https://www.facebook.com/share.php?u=${link}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={facebook} alt="facebook" width={30} height={20} />
      </a>

      <a
        className="twitter"
        href={`http://twitter.com/share?&url=${link}&text=${image}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={twitter} alt="twitter" width={30} height={20} />
      </a>

      <a
        className="linkedin"
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${link}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={linkedin} alt="linkedin" width={30} height={20} />
      </a>

      <a
        className="whatsapp"
        href={`https://api.whatsapp.com/send?text=${image}: ${link}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={whatsapp} alt="whatsapp" width={30} height={20} />
      </a>

      <a
        className="telegram"
        href={`https://telegram.me/share/url?url=${link}&text=${image}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={telegram} alt="telegram" width={30} height={20} />
      </a>
    </div>
  );
}
