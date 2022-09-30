
import AdminHeader from '../components/admin/AdminHeader'
import BikeTypes from '../components/home/BikeTypes'
import AdminLayout from '../components/layouts/AdminLayout'
import AdDrawer from '../components/admin/AdDrawer'
import StaticCalendar from '../components/admin/StaticCalendar'
import ClientOnly from '../components/admin/ClientOnly'
import ContentCard from '../components/elements/ContentCard'
import ContentCardHeader from '../components/elements/ContentCardHeader'
import ContentCardBody from '../components/elements/ContentCardBody'
import CalendarCaptions from '../components/admin/CalendarCaptions'
import ContentCardFooter from '../components/elements/ContentCardFooter'


export default function AdminPage() {


    return (

        <AdminLayout>


            <ContentCard>
                <ContentCardHeader>Calendario de reservassss


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


