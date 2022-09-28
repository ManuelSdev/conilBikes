
import AdminHeader from '../components/admin/AdminHeader'
import BikeTypes from '../components/home/BikeTypes'
import Layout from '../components/layouts/Layout'
import AdDrawer from '../components/admin/AdDrawer'
export default function Home() {
    return (

        <Layout
            header={<AdminHeader />}
        >
            ADMIN PAGE

            <AdDrawer />
        </Layout>

    )
}


