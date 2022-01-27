import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    <nav className={styles.nav}>
      <div>
        <Link href="/">
          <a className={router.pathname === "/" ? styles.left : styles.right}>Home</a>
        </Link>
      </div>
      <div>
        <Link href="/about">
          <a className={router.pathname === "/about" ? styles.left : styles.right}>About</a>
        </Link>
      </div>
    </nav>
  );
}
