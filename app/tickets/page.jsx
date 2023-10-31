import TicketList from "./TicketList";

export default function tickets() {
  return (
    <div>
      <nav>
        <div>
          <h1>Tickets</h1>
          <p><small>Currently open tickets.</small></p>
        </div>
      </nav>

      <TicketList/>
    </div>
  )
}
