// eslint-disable-next-line no-use-before-define
import Footer from '../../organism/Footer/Footer'
import Header from '../../organism/Header/Header'
import Section from '../../organism/Section/Section'
const GenZ = () => {
  return (
    <div className="xl:overflow-x-hidden">
      <Header
        background="background-gen-z"
        opacity="blue-30"
      />
      <Section />
      <Footer />
    </div>
  )
}

export default GenZ
