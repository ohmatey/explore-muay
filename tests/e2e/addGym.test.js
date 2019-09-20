describe('as a user I can add a gym', () => {
  it('should fill in form', async () => {
    await page.goto('http://localhost:3000/new-gym')

    await expect(page).toFillForm('form', {
      gymName: 'Bobs backyard',
      gymOwner: 'Bob brown'
    })
  }, 20000)

  it('should click submit', async () => {
    await expect(page).toClick('button', { text: 'Submit' })
  }, 20000)
})
