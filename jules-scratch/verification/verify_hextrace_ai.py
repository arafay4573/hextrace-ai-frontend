from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()

    # Landing Page
    page.goto("http://localhost:3000")
    page.screenshot(path="jules-scratch/verification/landing-page.png")

    # Dashboard Page
    page.goto("http://localhost:3000/dashboard")
    page.screenshot(path="jules-scratch/verification/dashboard-page.png")

    # Components Page
    page.goto("http://localhost:3000/components")
    page.screenshot(path="jules-scratch/verification/components-page.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
