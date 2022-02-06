import React, { useState, useEffect } from "react";
import Head from "next/head";
import axios from "axios";

export default function Seo({ title }) {
  return (
    <div>
      <Head>
        <title>{title} | Next Movies</title>
      </Head>
    </div>
  );
}
