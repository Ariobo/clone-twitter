import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/page.module.css";
import zLogo from "../../../../public/zlogo.png";
import MainModal from "../_component/Main";

export default function Login() {
  const router = useRouter();
  router.replace("/i/flow/login");
  return <MainModal></MainModal>;
}
