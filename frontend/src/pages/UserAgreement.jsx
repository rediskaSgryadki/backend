import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet-async'
const UserAgreement = () => {
  return (
    <>
    <Helmet>
      <title>ТАЙМБУК - пользовательское соглашение</title>
    </Helmet>
      <Header />
      <section className='grid grid-cols-1 md:grid-cols-3'>
        <div className='px-7 md:p-20 space-y-5 md:col-span-2 py-20'>
          <h1 className='text-xl md:text-3xl zag text-center' id="top">Пользовательское соглашение онлайн дневника ТАЙМБУК</h1>

          <h2 className='text-xl zag' id="intro">1. Введение</h2>
          <p className='text-base text px-5'>
            Настоящее Пользовательское соглашение (далее — Соглашение) регулирует отношения между администрацией сервиса онлайн дневника ТАЙМБУК (далее — Сервис) и пользователем по вопросам использования сайта, мобильного приложения и других сервисов, связанных с ТАЙМБУК.
          </p>
          <p className='text-base text px-5'>
            Используя Сервис, пользователь подтверждает, что ознакомился с условиями настоящего Соглашения, принимает их и обязуется их соблюдать. Если пользователь не согласен с условиями, он должен прекратить использование Сервиса.
          </p>

          <h2 className='text-xl zag' id="registration">2. Регистрация и аккаунт</h2>
          <h3 className='text-lg zag' id="registration-process">2.1. Процесс регистрации</h3>
          <ul className='text-base text px-10 list-disc'>
            <li>Для получения доступа к функционалу Сервиса пользователь должен пройти процедуру регистрации, указав достоверные и актуальные данные.</li>
            <li>Пользователь несет ответственность за сохранность своих учетных данных и не должен передавать их третьим лицам.</li>
          </ul>
          <h3 className='text-lg zag' id="registration-account">2.2. Использование аккаунта</h3>
          <ul className='text-base text px-10 list-disc'>
            <li>Пользователь обязуется не создавать более одного аккаунта без разрешения администрации.</li>
            <li>Администрация вправе заблокировать или удалить аккаунт пользователя в случае нарушения условий Соглашения.</li>
          </ul>

          <h2 className='text-xl zag' id="user-obligations">3. Обязанности пользователя</h2>
          <ul className='text-base text px-10 list-disc'>
            <li>Соблюдать действующее законодательство РФ и условия настоящего Соглашения.</li>
            <li>Не размещать в Сервисе информацию, нарушающую права третьих лиц, содержащую оскорбления, угрозы, спам, вредоносные программы и т.д.</li>
            <li>Не предпринимать действий, направленных на нарушение работоспособности или безопасности Сервиса.</li>
            <li>Не использовать Сервис для коммерческих целей без согласия администрации.</li>
          </ul>

          <h2 className='text-xl zag' id="intellectual">4. Интеллектуальная собственность</h2>
          <ul className='text-base text px-10 list-disc'>
            <li>Все объекты, размещённые в Сервисе, включая тексты, изображения, программный код, логотипы и дизайн, являются объектами авторского права и принадлежат администрации или иным правообладателям.</li>
            <li>Использование материалов Сервиса без разрешения запрещено.</li>
            <li>Пользователь сохраняет права на контент, который он размещает, но предоставляет Сервису неисключительную лицензию на его использование в рамках функционирования Сервиса.</li>
          </ul>

          <h2 className='text-xl zag' id="responsibility">5. Ответственность сторон</h2>
          <ul className='text-base text px-10 list-disc'>
            <li>Администрация не несет ответственности за сбои в работе Сервиса, вызванные техническими причинами, действиями третьих лиц или форс-мажорными обстоятельствами.</li>
            <li>Пользователь самостоятельно несет ответственность за размещаемую информацию и возможные последствия её публикации.</li>
            <li>Администрация не несет ответственности за возможный ущерб, возникший в результате использования или невозможности использования Сервиса.</li>
          </ul>

          <h2 className='text-xl zag' id="termination">6. Прекращение доступа</h2>
          <ul className='text-base text px-10 list-disc'>
            <li>Администрация вправе в любой момент ограничить или прекратить доступ пользователя к Сервису при нарушении условий Соглашения.</li>
            <li>Пользователь может удалить свой аккаунт самостоятельно или обратиться в службу поддержки для удаления данных.</li>
          </ul>

          <h2 className='text-xl zag' id="changes">7. Изменения в соглашении</h2>
          <p className='text-base text px-5'>
            Администрация оставляет за собой право вносить изменения в настоящее Соглашение. Актуальная версия всегда доступна на сайте. Рекомендуем периодически проверять данную страницу.
          </p>

          <h2 className='text-xl zag' id="contacts">8. Контактная информация</h2>
          <p className='text-base text px-5'>
            По вопросам, связанным с использованием Сервиса и настоящим Соглашением, вы можете обратиться по адресу электронной почты: <a href="mailto:support@timebook.ru" className="text-blue-600 underline">support@timebook.ru</a>
          </p>
        </div>
        <div className='pt-20'>
          <nav className="card fixed p-20 rounded-lg">
            <ul className="space-y-2 text-lg">
              <li><a href="#intro">1. Введение</a></li>
              <li>
                <a href="#registration">2. Регистрация и аккаунт</a>
                <ul className="ml-4 text-sm space-y-1">
                  <li><a href="#registration-process">2.1. Процесс регистрации</a></li>
                  <li><a href="#registration-account">2.2. Использование аккаунта</a></li>
                </ul>
              </li>
              <li><a href="#user-obligations">3. Обязанности пользователя</a></li>
              <li><a href="#intellectual">4. Интеллектуальная собственность</a></li>
              <li><a href="#responsibility">5. Ответственность сторон</a></li>
              <li><a href="#termination">6. Прекращение доступа</a></li>
              <li><a href="#changes">7. Изменения в соглашении</a></li>
              <li><a href="#contacts">8. Контакты</a></li>
              <li><a href="#top" className="text-blue-400 hover:underline text-sm">Наверх</a></li>
            </ul>
          </nav>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default UserAgreement