import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <div>
      <MDBCarousel showControls fade>
        <MDBCarouselInner style={{ height: "25rem" }}>
          <MDBCarouselItem itemId={0}>
            <MDBCarouselElement
              src="http://www.creativewebdesigner.in/wp-content/uploads/2017/07/slider-fullscreen-slide-3-1.jpg"
              alt="..."
            />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={1}>
            <MDBCarouselElement
              src="https://mdbcdn.b-cdn.net/img/new/slides/042.jpg"
              alt="..."
            />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={2}>
            <MDBCarouselElement
              src="https://mdbcdn.b-cdn.net/img/new/slides/043.jpg"
              alt="..."
            />
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </div>
  );
}
