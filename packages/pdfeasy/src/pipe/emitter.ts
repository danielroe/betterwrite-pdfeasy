import { PDFEasy } from '../runner/pdfeasy'

export const onPageAdded = (instance: PDFEasy, cb: any) => {
  instance.pdfkit?.on('pageAdded', () => {
    cb && cb()
  })
}
