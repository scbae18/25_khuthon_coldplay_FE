import React, { useEffect, useState } from "react";
import { MainHeader } from "../../shared/ui/Header";
import { TopHeader } from "../../shared/ui/Header";
import { Btn } from "../../shared/ui/button";
import BottomNav from "../../shared/ui/BottomNav";
//import Header from "../../shared/ui/header";
//import Footer from "../../shared/ui/Footer/footer";
//import WrappedTabs from "./ui/Tabbar/wrappedTabs";
//import Toast from "@/shared/ui/toast";
//import { useToast } from "@/shared/model/useToast";
import ProgressBar from "../../shared/ui/Progressbar";



export default function Main() {
  
  return (
    <>
      <MainHeader />
      <h1>TEST</h1>
      <Btn>검사 시작하기</Btn>
      <ProgressBar current={5} total={16} />
      <Btn variant="cancel">취소</Btn>
      <h2>TEST22</h2>
      <BottomNav />
    </>
  );
}
