import { LegalPage, legalWhatsappUrl } from './LegalPage'

export function TermsAndConditions() {
  return (
    <LegalPage title="Términos y Condiciones">
      <section>
        <h2>Identificación y objeto</h2>
        <p>
          Inteligente11 LAB es un sitio de Sebastián Acuña destinado a presentar servicios,
          soluciones digitales, experiencias y trabajos vinculados con desarrollo de software,
          automatización e inteligencia artificial. Su contenido tiene finalidad informativa y
          comercial.
        </p>
      </section>

      <section>
        <h2>Uso permitido</h2>
        <p>
          El sitio puede utilizarse para conocer los servicios ofrecidos y establecer contacto.
          No debe emplearse de forma que afecte su funcionamiento, vulnere derechos de terceros o
          implique un uso ilícito de sus contenidos.
        </p>
      </section>

      <section>
        <h2>Propiedad intelectual</h2>
        <p>
          El diseño, los textos, la marca, los logotipos y los materiales propios exhibidos en el
          sitio pertenecen a Inteligente11 LAB o se utilizan con autorización. Su publicación no
          concede derechos de reproducción, modificación, distribución o explotación salvo
          autorización expresa o los usos permitidos por la legislación aplicable.
        </p>
      </section>

      <section>
        <h2>Enlaces externos</h2>
        <p>
          El sitio contiene enlaces a proyectos, redes sociales y servicios de terceros. Cada
          tercero es responsable de sus contenidos, disponibilidad, condiciones y políticas.
          La inclusión de un enlace no implica control permanente ni garantía sobre el sitio de
          destino.
        </p>
      </section>

      <section>
        <h2>Consultas y contratación de servicios</h2>
        <p>
          La información publicada y las conversaciones iniciales no constituyen por sí solas una
          contratación. Los presupuestos, alcances, entregables, costos, plazos y demás condiciones
          de cada servicio deberán acordarse expresamente por separado entre las partes.
        </p>
      </section>

      <section>
        <h2>Disponibilidad y responsabilidad</h2>
        <p>
          Se procura mantener el sitio disponible y su información actualizada, aunque pueden
          producirse interrupciones, errores o tareas de mantenimiento. Dentro de los límites
          permitidos por la legislación aplicable, no se asume responsabilidad por daños derivados
          exclusivamente de interrupciones ajenas al control razonable del titular o del uso de
          servicios externos. Nada de lo aquí previsto excluye derechos irrenunciables reconocidos
          por la ley.
        </p>
      </section>

      <section>
        <h2>Actualizaciones</h2>
        <p>
          El contenido del sitio y estos términos pueden actualizarse para reflejar cambios en los
          servicios o en su funcionamiento. La versión vigente indicará su fecha de última
          actualización.
        </p>
      </section>

      <section>
        <h2>Legislación aplicable y contacto</h2>
        <p>
          Estos términos se interpretan conforme a las leyes de la República Argentina, sin afectar
          las normas imperativas que pudieran corresponder. Las consultas pueden realizarse a través
          del{' '}
          <a href={legalWhatsappUrl} target="_blank" rel="noopener noreferrer">
            WhatsApp utilizado en este sitio
          </a>
          .
        </p>
      </section>
    </LegalPage>
  )
}
