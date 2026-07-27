import { LegalPage, legalWhatsappUrl } from './LegalPage'

export function PrivacyPolicy() {
  return (
    <LegalPage title="Política de Privacidad">
      <section>
        <h2>Responsable y alcance</h2>
        <p>
          El responsable de este sitio es Sebastián Acuña, titular de Inteligente11 LAB,
          Argentina. Esta política describe cómo puede tratarse la información personal
          relacionada con las consultas realizadas a partir del sitio.
        </p>
      </section>

      <section>
        <h2>Información que puede recibirse</h2>
        <p>
          El sitio no posee formularios. Cuando una persona decide comunicarse voluntariamente
          mediante WhatsApp, puede compartir su nombre o nombre visible, número telefónico,
          contenido del mensaje e información comercial o de proyecto que elija proporcionar.
        </p>
      </section>

      <section>
        <h2>Finalidades</h2>
        <p>La información recibida puede utilizarse para:</p>
        <ul>
          <li>Responder consultas.</li>
          <li>Evaluar solicitudes de servicios.</li>
          <li>Mantener las comunicaciones comerciales solicitadas.</li>
          <li>Preparar propuestas cuando corresponda.</li>
        </ul>
      </section>

      <section>
        <h2>Analítica, publicidad y cookies</h2>
        <p>
          Actualmente, este sitio no utiliza herramientas propias de analítica o publicidad ni
          cookies propias de seguimiento. Si estas condiciones cambian, se actualizará esta
          política y se implementarán las medidas informativas o de consentimiento que resulten
          apropiadas.
        </p>
      </section>

      <section>
        <h2>Servicios y sitios de terceros</h2>
        <p>
          WhatsApp es un servicio de Meta y aplica sus propias condiciones y políticas de
          privacidad. Los demás sitios externos enlazados también son responsables de sus propias
          prácticas. Inteligente11 LAB no controla el tratamiento realizado por esos terceros.
        </p>
        <p>
          El proveedor de alojamiento puede procesar registros técnicos necesarios para brindar
          el servicio, mantener su seguridad, diagnosticar errores y asegurar su funcionamiento.
        </p>
      </section>

      <section>
        <h2>Conservación, seguridad y comunicación de datos</h2>
        <p>
          La información se conserva durante un plazo razonable para atender la consulta, dar
          seguimiento a la relación solicitada y cumplir obligaciones aplicables. Se adoptan
          medidas razonables para reducir riesgos de acceso, pérdida o uso no autorizado, sin que
          sea posible garantizar una seguridad absoluta. Los datos personales no se comercializan.
        </p>
      </section>

      <section>
        <h2>Derechos de las personas</h2>
        <p>
          Conforme a la Ley argentina 25.326, las personas pueden solicitar el acceso,
          rectificación, actualización o supresión de sus datos personales cuando corresponda.
          Para ejercer estos derechos, pueden comunicarse mediante el{' '}
          <a href={legalWhatsappUrl} target="_blank" rel="noopener noreferrer">
            WhatsApp utilizado en este sitio
          </a>
          .
        </p>
        <p>
          La Agencia de Acceso a la Información Pública es la autoridad de control en materia de
          protección de datos personales en la República Argentina.
        </p>
      </section>

      <section>
        <h2>Cambios en esta política</h2>
        <p>
          Esta política puede actualizarse para reflejar cambios en el sitio, en los servicios
          utilizados o en las prácticas de tratamiento. La versión vigente indicará siempre su
          fecha de última actualización.
        </p>
      </section>
    </LegalPage>
  )
}
