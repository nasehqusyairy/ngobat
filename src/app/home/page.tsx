import Image from 'next/image'
import logo from '../../img/logo.png'
import locationIcon from '../../img/location.png'
import personIcon from '../../img/person.png'
import calendarIcon from '../../img/calendar.png'
import heroImage from '../../img/hero.png'
import Link from 'next/link'
import '../../styles/home.scss'

function Home() {
  return (
    <main className="home">

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-light fixed-top" style={{ minHeight: '75px' }}>
        <div className="container">
          <a className="navbar-brand" href="#beranda"><Image src={logo} alt='logo' /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link me-lg-5 active" href="#beranda">Beranda</a>
              <a className="nav-link me-lg-5" href="#tentang">Tentang</a>
              <a className="nav-link me-lg-5" href="#layanan">Layanan</a>
              <a className="nav-link me-lg-5" href='#dokter'>Dokter</a>
              <a className="nav-link me-lg-5" href='#blog'>Blog</a>
              <a className="btn btn-primary btn-lg" href='#antrian'>Antrian</a>
            </div>
          </div>
        </div>
      </nav>

      <section className='bg-primary py-5 mt-5'>
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-12 col-lg-6 text-light text-center text-lg-start">
              <h1 className='fw-bold'>Kesehatan Anda Adalah Kekayaan Anda</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolorem magni, eaque quo omnis animi assumenda. Dolorem, minus consectetur inventore totam nisi, possimus placeat, quibusdam repellat temporibus explicabo sapiente quod.</p>
            </div>
            <div className="col-12 col-lg-6 text-center">
              <Image className="img-fluid" src={heroImage} alt='hero.png' />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <div className="d-lg-flex justify-content-between">
                    <h3 className="text-secondary">Buat Janji Temu Sekarang</h3>
                    <form>
                      <div className="input-group input-group-lg mb-3">
                        <span className="input-group-text text-white bg-secondary"><i className="bi bi-search"></i></span>
                        <input type="text" className="form-control text-white bg-secondary shadow-none" placeholder="Cari..." />
                      </div>
                    </form>
                  </div>
                  <ul className="nav nav-tabs justify-content-md-around mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link active" id="pills-umum-tab" data-bs-toggle="tab" data-bs-target="#pills-umum" type="button" role="tab" >UMUM</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="pills-dokter-tab" data-bs-toggle="tab" data-bs-target="#pills-dokter" type="button" role="tab">DOKTER</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="pills-gigi-tab" data-bs-toggle="tab" data-bs-target="#pills-gigi" type="button" role="tab">DOKTER GIGI</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="pills-tht-tab" data-bs-toggle="tab" data-bs-target="#pills-tht" type="button" role="tab">SPESIALIS THT</button>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-umum" role="tabpanel" >
                      <div className="row border-bottom">
                        <div className="col-12 col-lg-4">
                          <div className="card mb-3">
                            <div className="card-body">
                              <div className="d-flex">
                                <Image src={locationIcon} className='me-3' alt='' />
                                <div className="content">
                                  <p className="text-muted">Lokasi</p>
                                  <p>Ngunut, Tulungagung</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-lg-4">
                          <div className="card mb-3">
                            <div className="card-body">
                              <div className="d-flex">
                                <Image src={calendarIcon} className='me-3' alt='' />
                                <div className="content">
                                  <p className="text-muted">Tanggal Janji</p>
                                  <p>14 November 2022</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-lg-4">
                          <div className="card mb-3">
                            <div className="card-body">
                              <div className="d-flex">
                                <Image src={personIcon} className='me-3' alt='' />
                                <div className="content">
                                  <p className="text-muted">Dokter</p>
                                  <p>Dr. Philips</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-dokter" role="tabpanel">...</div>
                    <div className="tab-pane fade" id="pills-gigi" role="tabpanel">...</div>
                    <div className="tab-pane fade" id="pills-tht" role="tabpanel">...</div>
                  </div>
                  <p className="text-end mt-3">
                    <button className="btn btn-primary btn-lg">Buat Janji</button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;