describe('as a user I can', () => {
  it('visit /add-gym', async () => {
    await page.goto('http://localhost:3000/new-gym')
  }, 200000)

  it('complete add gym form successfully', async () => {
    await expect(page).toFillForm('form', {
      gymName: 'Bobs backyard',
      gymOwner: 'Bob brown'
    })

    await expect(page).toClick('button', { text: 'Submit' })
  }, 20000)
})
