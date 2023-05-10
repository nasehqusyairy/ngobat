"use client"
import Link from "next/link";
import pasienBaruImg from "../img/pasien-baru.png";
import pasienLamaImg from "../img/pasien-lama.png";
import "./../styles/home.scss";
import { useState } from "react";

function Home() {
  const [destination, setDestination] = useState('pasien-lama');
  return (
    <main>
      <section className="home">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 px-lg-5">
              <div className="text-center">
                <h1>ngobat.com</h1>
                <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="my-5">
                <div className={"card mb-3 " + (destination === 'pasien-baru' ? 'active' : '')} onClick={() => setDestination('pasien-baru')}>
                  <div className="card-body d-flex align-items-center justify-content-evenly">
                    <img src={pasienBaruImg.src} alt="pengguna baru" width="75" />
                    <div className="body px-2">
                      <h4>Pasien Baru</h4>
                      <p>Belum memiliki nomer induk pasien</p>
                    </div>
                    <div className="indicator"></div>
                  </div>
                </div>
                <div className={"card mb-3 " + (destination === 'pasien-lama' ? 'active' : '')} onClick={() => setDestination('pasien-lama')}>
                  <div className="card-body d-flex align-items-center justify-content-evenly">
                    <img src={pasienLamaImg.src} alt="pengguna lama" width="75" />
                    <div className="body px-2">
                      <h4>Pasien Lama</h4>
                      <p>Sudah memiliki nomer induk pasien</p>
                    </div>
                    <div className="indicator">
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Link href={destination} className="btn btn-dark btn-lg">Pergi</Link>
              </div>
            </div>
            <div className="d-none d-lg-flex align-items-center col-lg-6 side-section p-5">
              <figure>
                <blockquote className="blockquote">
                  <p className="fw-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eius molestiae
                    aspernatur
                    nam unde velit
                    autem voluptate facilis suscipit nostrum nulla, cum perferendis voluptatum labore ducimus. Culpa in a
                    similique.</p>

                </blockquote>
                <figcaption className="blockquote-footer mt-3">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;