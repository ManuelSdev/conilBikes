
import AdminHeader from '../components/admin/AdminHeader'
import BikeTypes from '../components/home/BikeTypes'
import AdminLayout from '../components/layouts/AdminLayout'
import AdDrawer from '../components/admin/AdDrawer'
import StaticCalendar from '../components/admin/StaticCalendar'
import ClientOnly from '../components/admin/ClientOnly'
import ContentCard from '../components/contentCard/ContentCard'
import ContentCardHeader from '../components/contentCard/ContentCardHeader'
import ContentCardBody from '../components/contentCard/ContentCardBody'
import CalendarCaptions from '../components/admin/CalendarCaptions'
import ContentCardFooter from '../components/contentCard/ContentCardFooter'


export default function AdminPage() {


    return (

        <AdminLayout>
            <ContentCard>
                <ContentCardHeader>Calendario de reservas

                </ContentCardHeader>
                <ContentCardBody>
                    <ClientOnly>
                        <StaticCalendar />
                    </ClientOnly>
                    <CalendarCaptions />
                </ContentCardBody>

            </ContentCard>


            <AdDrawer />
        </AdminLayout>

    )
}


