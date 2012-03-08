describe('LateRooms Carousel Setup', function() {
	
    beforeEach(function() {
		this.fixture = this.fixture || document.getElementById('jasmine-fixture');
		
		this.originalHtml = this.fixture.innerHTML;
    });

    afterEach(function() {
		this.fixture.innerHTML = this.originalHtml;
    });

    it('should load the first image frame within 500ms when initialized', function() {
		
		runs( function () {			
			var carousel = laterooms.carousel();
		});

		waits(500);
		
		runs( function () {
			var frameslide = document.getElementById('tr-frameslide');
			
			assertThat( frameslide.children.length, is( equalTo( 1 ) ) );
		});
    });
	
 });