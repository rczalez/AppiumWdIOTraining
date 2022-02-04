describe('Selina APP', () => {
    it('Skip login', async () => {
        
        await $('//*[@resource-id="com.selina.android:id/tv_skip_login"]').click();

        await $('//*[@text="Trips"]').click();

        await driver.pause("5000");
    });
});