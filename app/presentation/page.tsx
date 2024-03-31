import React from 'react'
import Layout from '../components/layout'
import PresentationCreationForm from '../components/presentation/PresentationCreationForm'

const page = () => {
  return (
    <div>
      <Layout>
      <div className="container mx-auto px-3 py-12">
        <PresentationCreationForm />
      </div>
        </Layout>
    </div>
  )
}

export default page
