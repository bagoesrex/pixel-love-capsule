import { CapsuleExperience } from "@/components/CapsuleExperience";
import { giftConfig } from "@/config/gift.config";

export default function Home() {
  return <CapsuleExperience gift={giftConfig} />;
}
