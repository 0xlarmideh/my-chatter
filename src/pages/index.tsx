import React from 'react'
import { ReactElement } from "react";
import { landingLayout } from '@/types/type'

import HeaderSection from "../../components/landing/HeaderSection"
import AboutSection from "../../components/landing/AboutSection"
import Layout from '../../components/layout/default'
const Index:landingLayout = () => {
  return (
    <main>
      <HeaderSection />
      <AboutSection />
    </main>
  )
}

Index.getLayout = function (page: ReactElement) {
  return (
    <Layout>{page}</Layout>
  )
}

export default Index