import React from 'react'
import Layout from '../components/Layouts/DefaultLayout'
import PresentationCreationForm from '../components/presentation/PresentationCreationForm'

const page = () => {
  return (
    <div>
      <Layout>
      <div className="container mx-auto">
      <h1 className="text-2xl font-semibold text-primary m-3 ">Create Presentation</h1>
        <PresentationCreationForm />
      </div>
        </Layout>
    </div>
  )
}

export default page
