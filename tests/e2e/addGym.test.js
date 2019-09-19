describe('as a user I can add a gym', () => {
  it('should fill in form and click submit', async () => {
    await page.goto('http://localhost:3000/new-gym')

    await expect(page).toFillForm('form', {
      gymName: 'Bobs backyard',
      gymOwner: 'Bob brown'
    })

    await expect(page).toClick('button', { text: 'Submit' })
  }, 20000)
})
