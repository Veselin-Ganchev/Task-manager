import Link from "next/link";

const Custom404 = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <h3>The page does not exist.</h3>
      <Link href="/">Back to homepage</Link>
    </div>
  );
};

export default Custom404;
