"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("412ee65d-4cf7-4309-8d4f-7d8052ed2eba");
    }, []);

    return null;
};