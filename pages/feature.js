/* eslint-disable @next/next/no-img-element */
import Header from "../components/header";

export default function Feature() {
  return (
    <div>
      <Header />
      <main className="container">
        <div className="row">
          <div className="col-lg-12 mt-5">
            <img src="/icon/3.svg" alt="logo" width="15" />
            <img src="/icon/2.svg" alt="logo" width="15" />
            <img src="/icon/4.svg" alt="logo" width="15" />
            <img src="/icon/1.svg" alt="logo" width="15" />
          </div>
          <div className="col-lg-12">
            <h1>Display 1</h1>
            <h2>Display 2</h2>
            <h3>Display 3</h3>
            <h4>Display 4</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 mt-5">
            <p className="text-center">
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor. Cum sociis natoque penatibus et magnis dis parturient
              montes.
            </p>
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-12 mt-2">
            <p className="text-end mb-2">
              You can use the mark tag to <mark>highlight</mark> te text.
            </p>
            <p className="text-end mb-2">
              <del>
                This line of text is meant to be treated as deleted text.
              </del>
            </p>
            <p className="text-end mb-2">
              <s>
                This line of text is meant to be treated as no longer accurate.
              </s>
            </p>
            <p className="text-end mb-2">
              <ins>
                This line of text is meant to be treated as an addition to the
                document.
              </ins>
            </p>
            <p className="text-end mb-2">
              <u>This line of text will render as underlined.</u>
            </p>
            <p className="text-end mb-2">
              <small>
                This line of text is meant to be treated as fine print.
              </small>
            </p>
            <p className="text-end mb-2">
              <strong>This line rendered as bold text.</strong>
            </p>
            <p className="text-end mb-5">
              <em>This line rendered as italicized text.</em>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
