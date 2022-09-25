import { Link } from "@solidjs/router";
import { Component } from "solid-js";

const Home: Component = () => {
  return (
    <div class="max-w-7xl mx-auto py-6 flex flex-col gap-5 sm:px-6 text-blue-800 lg:px-8">
      <Link href="/location/arnold">Arnold</Link>
      <Link href="/location/umph">Umph</Link>
    </div>
  );
};

export default Home;
