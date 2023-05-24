import Link from 'next/link';
import '../../styles/login.scss'
function login() {
  return (
    <main>
      <section className='login'>
        <div className="container-fluid">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-12 col-lg-6 px-lg-5 d-flex flex-column justify-content-between form-wrapper py-5">
              <form>
                <h1>Pasien Lama</h1>
                <p className="text-muted">Konfirmasi data pasien lama</p>

                <div className="my-5">
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="nomer_pasien" placeholder="Nomor Pasien" />
                    <label htmlFor="nomer_pasien">Nomor Pasien</label>
                  </div>
                  <div className="form-floating">
                    <input type="password" className="form-control" id="sandi" placeholder="Kata Sandi" />
                    <label htmlFor="sandi">Kata Sandi</label>
                  </div>
                </div>

                <div className="d-grid gap-2">
                  <button className="btn btn-dark btn-lg">Periksa Antrian</button>
                  <Link href="/" className="btn btn-outline-dark btn-lg">Kembali ke Website</Link>
                </div>

              </form>
              <p className="text-center">Belum memiliki nomer pasien? <Link href="/pasien-baru">Pasien Baru</Link></p>
            </div>
            <div className="d-none d-lg-flex col-lg-6 side-section p-5 text-white flex-column justify-content-between">
              <h1>KlinikNgobat</h1>
              <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt enim impedit voluptate omnis
                perferendis natus saepe labore.</h4>
              <div className="source">
                <p>John Doe</p>
                <p>Direktur Rumah Sakit</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default login;